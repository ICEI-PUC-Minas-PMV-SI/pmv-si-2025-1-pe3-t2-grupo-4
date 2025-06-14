import React, { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./styles.css";

import {
  Box,
  Button,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
  useTheme,
  Grid,
  Slider,
} from "@mui/material";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Announcement, Note, Notes } from "@mui/icons-material";
import Annotation from "../Forms/Annotation";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.NEXT_PUBLIC_URL}/pdf.worker.min.mjs`;

interface PdfReaderProps {
  pdfUrl: string;
}

const DEFAULT_OVERLAY_COLOR = "#F4A460";
const DEFAULT_OVERLAY_OPACITY = 0.2;

const PdfReader = ({ pdfUrl }: PdfReaderProps) => {
  const theme = useTheme();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    theme.palette.grey[100],
  );
  const [openAnnotation, setOpenAnnotation] = useState(false);

  const [sepiaMode, setSepiaMode] = useState<boolean>(false);
  const [invertedMode, setInvertedMode] = useState<boolean>(false);
  const [overlayMode, setOverlayMode] = useState<boolean>(false);
  const [overlayColor, setOverlayColor] = useState<string>(
    DEFAULT_OVERLAY_COLOR,
  );
  const [overlayOpacity, setOverlayOpacity] = useState<number>(
    DEFAULT_OVERLAY_OPACITY,
  );

  useEffect(() => {
    if (sepiaMode) {
      setBackgroundColor("#61584A");
    } else if (invertedMode) {
      setBackgroundColor(theme.palette.grey[900]);
    } else if (overlayMode) {
      setBackgroundColor(theme.palette.grey[800]);
    } else {
      setBackgroundColor(theme.palette.grey[100]);
    }
  }, [sepiaMode, invertedMode, overlayMode, theme.palette.grey]);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setPageNumber(1);
    },
    [],
  );

  const changePage = useCallback((offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }, []);

  const previousPage = useCallback(() => changePage(-1), [changePage]);
  const nextPage = useCallback(() => changePage(1), [changePage]);

  const handleZoomIn = useCallback(
    () => setScale((prevScale) => Math.min(prevScale + 0.2, 3.0)),
    [],
  );
  const handleZoomOut = useCallback(
    () => setScale((prevScale) => Math.max(prevScale - 0.2, 0.5)),
    [],
  );

  const toggleSepiaMode = useCallback(() => {
    setSepiaMode((prev) => !prev);
    setInvertedMode(false);
    setOverlayMode(false);
    setOverlayColor(DEFAULT_OVERLAY_COLOR);
    setOverlayOpacity(DEFAULT_OVERLAY_OPACITY);
  }, []);

  const toggleInvertedMode = useCallback(() => {
    setInvertedMode((prev) => !prev);
    setSepiaMode(false);
    setOverlayMode(false);
    setOverlayColor(DEFAULT_OVERLAY_COLOR);
    setOverlayOpacity(DEFAULT_OVERLAY_OPACITY);
  }, []);

  const toggleOverlayMode = useCallback(() => {
    setOverlayMode((prev) => !prev);
    setSepiaMode(false);
    setInvertedMode(false);
  }, []);

  const handleOverlayColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOverlayColor(e.target.value);
    },
    [],
  );

  const handleOverlayOpacityChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      setOverlayOpacity(newValue as number);
    },
    [],
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        backgroundColor: backgroundColor,
        color:
          sepiaMode || invertedMode || overlayMode
            ? theme.palette.grey[200]
            : theme.palette.text.primary,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          padding: 2,
          backgroundColor:
            sepiaMode || invertedMode || overlayMode
              ? theme.palette.grey[800]
              : theme.palette.background.paper,
          borderBottom: 1,
          borderColor:
            sepiaMode || invertedMode || overlayMode
              ? theme.palette.grey[700]
              : "divider",
          boxShadow: 3,
          zIndex: 10,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ maxWidth: "900px" }}
        >
          <Grid>
            <Button
              variant="outlined"
              onClick={() => setOpenAnnotation(!openAnnotation)}
              sx={{
                color:
                  sepiaMode || invertedMode || overlayMode
                    ? theme.palette.grey[200]
                    : theme.palette.text.primary,
                mr: 3,
              }}
              startIcon={<Notes />}
            >
              Anotações
            </Button>
          </Grid>
          <Grid>
            <FormControlLabel
              control={
                <Switch checked={sepiaMode} onChange={toggleSepiaMode} />
              }
              label="Modo Sépia"
              sx={{
                color:
                  sepiaMode || invertedMode || overlayMode
                    ? theme.palette.grey[200]
                    : theme.palette.text.primary,
              }}
            />
          </Grid>
          <Grid>
            <FormControlLabel
              control={
                <Switch checked={invertedMode} onChange={toggleInvertedMode} />
              }
              label="Modo Noturno (Invertido)"
              sx={{
                color:
                  sepiaMode || invertedMode || overlayMode
                    ? theme.palette.grey[200]
                    : theme.palette.text.primary,
              }}
            />
          </Grid>
          <Grid>
            <FormControlLabel
              control={
                <Switch checked={overlayMode} onChange={toggleOverlayMode} />
              }
              label="Modo Personalizado"
              sx={{
                color:
                  sepiaMode || invertedMode || overlayMode
                    ? theme.palette.grey[200]
                    : theme.palette.text.primary,
              }}
            />
          </Grid>

          {overlayMode && (
            <>
              <Grid>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.grey[200] }}
                  >
                    Cor Overlay:
                  </Typography>
                  <input
                    type="color"
                    value={overlayColor}
                    onChange={handleOverlayColorChange}
                    style={{
                      width: 30,
                      height: 30,
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: "nowrap",
                      color: theme.palette.grey[200],
                    }}
                  >
                    Opacidade:
                  </Typography>
                  <Slider
                    value={overlayOpacity}
                    onChange={handleOverlayOpacityChange}
                    min={0.0}
                    max={0.5}
                    step={0.01}
                    aria-labelledby="overlay-opacity-slider"
                    valueLabelDisplay="auto"
                    size="small"
                    sx={{ width: "100px", color: theme.palette.primary.main }}
                  />
                </Box>
              </Grid>
            </>
          )}
        </Grid>

        {/* Controles de Zoom */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            startIcon={<ZoomOutIcon />}
          >
            Zoom
          </Button>
          <Typography variant="body1">{(scale * 100).toFixed(0)}%</Typography>
          <Button
            variant="outlined"
            onClick={handleZoomIn}
            disabled={scale >= 3.0}
            startIcon={<ZoomInIcon />}
          >
            Zoom
          </Button>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            onClick={previousPage}
            disabled={pageNumber <= 1}
            startIcon={<NavigateBeforeIcon />}
          >
            Anterior
          </Button>
          <Typography
            variant="body1"
            sx={{ minWidth: "120px", textAlign: "center" }}
          >
            Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
          </Typography>
          <Button
            variant="outlined"
            onClick={nextPage}
            disabled={pageNumber >= (numPages || 0)}
            endIcon={<NavigateNextIcon />}
          >
            Próxima
          </Button>
        </Stack>
      </Stack>

      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 2,
        }}
      >
        {pdfUrl ? (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className="pdf-document"
            loading="Carregando livro..."
          >
            <Box
              sx={
                {
                  "--overlay-color": overlayMode ? overlayColor : "transparent",
                  "--overlay-opacity": overlayMode ? overlayOpacity : 0,
                } as React.CSSProperties
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderAnnotationLayer={true}
                renderTextLayer={true}
                loading="Carregando página..."
                className={
                  sepiaMode
                    ? "sepia-mode-filter"
                    : invertedMode
                    ? "inverted-mode-filter"
                    : overlayMode
                    ? "overlay-mode-active"
                    : ""
                }
              />
            </Box>
          </Document>
        ) : (
          <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
            Por favor, forneça uma URL de PDF.
          </Typography>
        )}
      </Box>
      <Annotation
        open={openAnnotation}
        onClose={() => setOpenAnnotation(false)}
      />
    </Box>
  );
};

export default PdfReader;
