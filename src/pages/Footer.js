import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Here is a link to my GitHub:</span>
        </div>

        <div>
          <a href='https://github.com/Hcran18/my_portfolio' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <img src="https://assets.jlscontent.com/images/corp/john-l-scott-logo.png" width="100" class="d-inline-block align-top" alt=""></img>
      </div>


    </MDBFooter>
    </>
  )
};

export default Footer;
