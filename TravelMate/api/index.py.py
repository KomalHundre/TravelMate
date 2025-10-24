from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from fpdf import FPDF
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # or replace "*" with the playground origin for better security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate_pdf")
def generate_pdf(request_data: dict):
    trip_plan = request_data.get("trip_plan", "No trip details provided.")

    # Create PDF
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    pdf.multi_cell(0, 10, txt="TravelMate Trip Plan\n\n", align="C")
    pdf.multi_cell(0, 10, txt=trip_plan)

    # ✅ Generate PDF content in memory
    pdf_bytes = pdf.output(dest='S').encode('latin1')  # returns string → convert to bytes
    pdf_stream = BytesIO(pdf_bytes)
    pdf_stream.seek(0)

    return StreamingResponse(
        pdf_stream,
        media_type="application/pdf",
        headers={"Content-Disposition": "attachment; filename=trip_plan.pdf"}
    )
