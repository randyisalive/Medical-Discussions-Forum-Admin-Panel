import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { ScrollPanel } from "primereact/scrollpanel";

function Home() {
  return (
    <>
      <div className="d-flex">
        <MDBContainer className="d-flex w-25">
          <ScrollPanel style={{ width: "100%", height: "1080px" }}>
            <p className="display-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique tenetur illo consequatur, optio laboriosam commodi magni
              eius beatae ipsam soluta magnam facere sit non illum ducimus
              dolore repellat omnis quas.
            </p>
          </ScrollPanel>
        </MDBContainer>
        <MDBContainer className="d-flex w-100 bg-danger">
          <div className="d-flex gap-2 w-100">
            <MDBCard>
              <MDBCardBody></MDBCardBody>
            </MDBCard>
            <MDBCard>
              <MDBCardBody></MDBCardBody>
            </MDBCard>
            <MDBCard>
              <MDBCardBody></MDBCardBody>
            </MDBCard>
            <MDBCard>
              <MDBCardBody></MDBCardBody>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    </>
  );
}

export default Home;
