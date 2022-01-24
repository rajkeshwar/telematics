const TelemacticsPage = () => (
  <div className="page-content">
    <div className="container">
      <div className="card">
        <div className="card-header" />
        <div className="card-body">
          <div className="row row"><h2 style={{ paddingLeft: '13px' }}>Share your fleet's telematics data with Mobikit</h2></div>
          <div className="row row row-cards">
            <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div>
                <div className="card">
                  <div className="card-body">
                    <h4>Welcome!</h4>
                    <p>Share telematics with Mobikit.</p>
                    <p>We will use this information to better understand your fleet's driving behavior and share those insights with you. Please note that all fields are required.</p>
                    <br />
                    <h4>What is Mobikit?</h4>
                    <p>Mobikit is an easy and responsible way to share telematics data. To keep you safe, we do the following:</p>
                    <p><i className="fe fe-check text-success mr-2" name="check" />We'll never share your passwords.</p>
                    <p><i className="fe fe-check text-success mr-2" name="check" />You can control and revoke data access at any time using this form.</p>
                    <p><i className="fe fe-check text-success mr-2" name="check" />We use state of the art security and compliance standards to keep your information secure.</p>
                    <p><i className="fe fe-check text-success mr-2" name="check" />We never share, sell, or exchange your data with any third party providers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="row row">
                <div className="card">
                  <div className="card-header"><b>Company Background</b></div>
                  <div className="card-body">
                    <form autoComplete="off">
                      <div className="row row">
                        <div className="col">
                          <div className="form-group"><label className="form-label">First Name</label><input name="first_name" className="form-control" type="text" placeholder="Jane" defaultValue /></div>
                        </div>
                        <div className="col">
                          <div className="form-group"><label className="form-label">Last Name</label><input name="last_name" className="form-control" type="text" placeholder="Smith" defaultValue /></div>
                        </div>
                      </div>
                      <div className="row row">
                        <div className="col">
                          <div className="form-group"><label className="form-label">Email Address</label><input name="email" className="form-control" type="text" placeholder="fleet_manager@my_company.com" defaultValue /></div>
                        </div>
                        <div className="col">
                          <div className="form-group"><label className="form-label">Approximate Fleet Size</label><input name="fleet_size" className="form-control" type="text" placeholder={100} defaultValue /></div>
                        </div>
                      </div>
                      <div className="row row">
                        <div className="col">
                          <div className="form-group"><label className="form-label">Business Name</label><input name="business_name" className="form-control" type="text" placeholder="My Company" defaultValue /></div>
                        </div>
                        <div className="col">
                          <div className="form-group"><label className="form-label">Business Address</label><input name="business_address" className="form-control" type="text" placeholder="1234 Fleet Drive, New York, NY 10001" defaultValue /></div>
                        </div>
                      </div>
                      <div className="form-group"><label className="form-label">Fleet Purpose</label><textarea className="form-control" name="fleet_details" placeholder="Tell us more about how your company uses your fleet." defaultValue={""} /></div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row row">
                <div className="card">
                  <div className="card-header"><b>Telematics Information</b></div>
                  <div className="card-body">
                    <div>
                      <div className="form-group">
                        <label className="form-label">Select Telematics Provider</label>Please provide the credentials associated with your telematics provider. If possible, it is recommended that you make us a separate account and share those credentials with us. <br /><br />Don't see your telematics provider on the list? Send us an email at <a href="mailto:help@mobikit.io">help@mobikit.io</a>.<br /><br />
                        <select name="tsp" className="form-control custom-select">
                          <option>Geotab</option>
                          <option>Samsara</option>
                          <option>Verizon Connect</option>
                          <option>KeepTruckin</option>
                          <option>Azuga</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ float: 'right', fontSize: '10px' }}><button className="btn btn-secondary">Click here to find your credentials</button><br />
                    </div>
                    <div>
                      <br />
                      <form autoComplete="off">
                        <div className="form-group"><label className="form-label">Username</label><input name="username" className="form-control" type="text" placeholder="fleet_manager@my_company.com" defaultValue /></div>
                        <div className="form-group"><label className="form-label">Password</label><input name="password" className="form-control" type="Password" placeholder="my_secret_password" defaultValue /></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row">
                <div className="col col-12">
                  <div>
                    <div>
                      <div>
                        <div>
                          <p style={{ fontSize: '12px' }}>By checking this box, you acknowledge that you have read and agree to Mobikit's <a href="https://www.mobikit.io/terms_of_use.html" target="_blank">Terms of Use </a>and <a href="https://www.mobikit.io/privacy_policy.html" target="_blank">Privacy Policy</a>.</p>
                          <div className="form-group"><label className="custom-control custom-checkbox"><input name="accept terms of use and privacy policy" className="custom-control-input custom-control custom-checkbox" type="checkbox" defaultValue="agree" /><span className="custom-control-label">I have read and agree to the Terms of Use and Privacy Policy</span></label><p style={{ color: 'red', fontSize: '12px' }} /></div>
                        </div>
                        <button className="btn btn-primary" id="oauth" style={{ width: '100%', fontSize: '15px', backgroundColor: 'rgb(52, 44, 142)', border: '0px' }}><a id="oauth">Onboard Your Fleet</a></button>
                      </div>
                    </div>
                  </div>
                  <br /><div style={{ float: 'right', fontSize: '14px' }}><a href="mailto:help@mobikit.io?subject=Revoke%20Access%20to%20Fleet%20Telematics&body=Hello%20Mobikit%20Team%2C%20%0A%0AI%20am%20the%20fleet%20manager%20for%20%5BINSERT%20COMPANY%5D.%20We%20use%20%5BINSERT%20TELEMATICS%20PROVIDER%5D%20as%20our%20telematics%20provider.%20I%20would%20like%20to%20revoke%20my%carriers%27s%20access%20to%20our%20telematics%20data.%20%0A%0A-%5BYOUR%20NAME%5D">Need to Revoke Access to Your Telematics?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TelemacticsPage;