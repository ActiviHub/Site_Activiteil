const Switch = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-inline-block me-1">Off</div>
            <div class="form-check form-switch d-inline-block">
              <input
                type="checkbox"
                class="form-check-input"
                id="site_state"
                style={{ cursor: "pointer" }}
              />
              <label for="site_state" class="form-check-label">
                On
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switch;
