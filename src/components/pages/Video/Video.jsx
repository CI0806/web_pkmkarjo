import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Box,
  Pagination,
  Stack,
  Skeleton,
  Paper,
} from "@mui/material";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import services from "@/services";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await services.video.getall();
        if (response.status === "success") {
          setVideos(response.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data video:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const count = Math.ceil(videos.length / itemsPerPage);
  const currentData = videos.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );


  return (
    <Box sx={{ pb: 10, bgcolor: "#f1f5f9", minHeight: "100vh" }}>
      <PageHeader
        title="Galeri Video"
        description="Edukasi kesehatan dan dokumentasi kegiatan Puskesmas Karang Rejo dalam format visual."
      />

      <Container sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {loading ? (
            [...Array(3)].map((_, i) => (
              <Grid item size={{xs:12, md:6}} key={i}>
                <Skeleton
                  variant="rectangular"
                  height={300}
                  sx={{ borderRadius: 4 }}
                />
                <Skeleton width="60%" sx={{ mt: 2 }} />
              </Grid>
            ))
          ) : currentData.length > 0 ? (
            currentData.map((video, index) => (
              <Grid item size={{xs:12, md:6}} key={video.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 4,
                      bgcolor: "white",
                      border: "1px solid #e2e8f0",
                    }}>
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "56.25%",
                        borderRadius: 3,
                        overflow: "hidden",
                        bgcolor: "black",
                        mb: 2,
                      }}>
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: 0,
                        }}
                        // Perhatikan perubahan nama properti: video.url_video
                        src={`https://www.youtube.com/embed/${video.url_video}?autoplay=0`}
                        title={video.judul}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: "#1e293b" }}>
                        {video.judul}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Diunggah pada:{" "}
                        {new Date(video.created_at).toLocaleDateString("id-ID")}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Grid item size={{xs:12}}>
              <Typography align="center">Tidak ada video ditemukan.</Typography>
            </Grid>
          )}
        </Grid>

        {count > 1 && (
          <Stack spacing={2} sx={{ mt: 8, alignItems: "center" }}>
            <Pagination
              count={count}
              page={page}
              onChange={(e, v) => setPage(v)}
              color="primary"
            />
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Video;
