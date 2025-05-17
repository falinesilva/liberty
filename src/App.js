import "./style.css";

function App() {
  return (
    <>
      <main>
        <div className="container">
          {/* HEADER */}
          <header className="header">
            <div className="logo">
              <img src="logo.png" width="36" alt="Liberty Logo" />
            </div>
            <div className="menu-icon">
              <button className="btn btn-menu">
                <img
                  className="menu-img"
                  src="open-menu.png"
                  width="36"
                  alt="Menu icon"
                />
              </button>
            </div>
          </header>

          <Menu />
          <ItemForm />
          <NetWorth />
          <ItemList />
          <Footer />
        </div>
      </main>
    </>
  );
}

function Menu() {
  return (
    <div className="menu">
      <label className="toggle">
        <span>Show Net Worth</span>
        <input type="checkbox" id="toggle-stats" />
        <span className="slider"></span>
      </label>
      <label className="toggle">
        <span>Show Assets</span>
        <input type="checkbox" id="toggle-assets" />
        <span className="slider"></span>
      </label>

      <label className="toggle">
        <span>Show Liabilities</span>
        <input type="checkbox" id="toggle-liabilities" />
        <span className="slider"></span>
      </label>
      <button className="btn btn-add">Add item</button>
    </div>
  );
}

function ItemForm() {
  return (
    <form className="item-form">
      <input type="text" placeholder="Name" />
      <select>
        <option value="">Type:</option>
        <optgroup label="Assets">
          <option value="business-ownership">Business Ownership</option>
          <option value="cash">Cash</option>
          <option value="collectibles">Collectibles</option>
          <option value="cryptocurrency">Cryptocurrency</option>
          <option value="equipment">Equipment</option>
          <option value="mutual-funds-etfs">Mutual Funds & ETFs</option>
          <option value="other-investments">Other Investments</option>
          <option value="real-estate">Real Estate</option>
          <option value="retirement-accounts">Retirement Accounts</option>
          <option value="stocks-bonds">Stocks & Bonds</option>
          <option value="valuables">Valuables</option>
          <option value="vehicle">Vehicle</option>
        </optgroup>
        <optgroup label="Liabilities">
          <option value="alimony">Alimony</option>
          <option value="child-support">Child Support</option>
          <option value="credit-cards">Credit Cards</option>
          <option value="medical-bills">Medical Bills</option>
          <option value="mortgages">Mortgages</option>
          <option value="outstanding-bills">Outstanding Bills</option>
          <option value="personal-loans">Personal Loans</option>
          <option value="student-loans">Student Loans</option>
          <option value="taxes-owed">Taxes Owed</option>
        </optgroup>
      </select>
      <input type="text" placeholder="Value" />
      <button type="button" className="btn btn-add-save">
        Save
      </button>
      <button type="button" className="btn btn-add-cancel">
        Cancel
      </button>
    </form>
  );
}

function NetWorth() {
  return (
    <div className="net-worth">
      <p>
        <strong>Net Worth:</strong>
      </p>
      <div className="stat positive">
        <span>+ R$147.000</span>
      </div>
    </div>
  );
}

function ItemList() {
  return (
    <ul className="item-list">
      <li className="item">
        <span className="name">Estate Property</span>
        <br />
        <span className="type">Real Estate</span>
        <br />
        <span className="class asset">Asset</span>
        <br />
        <span className="value">R$ 150.000</span>
        <div className="item-buttons">
          <button className="btn btn-delete-item">Delete</button>
          <button className="btn btn-edit-item">Edit</button>
        </div>
      </li>

      <li className="item">
        <span className="name">NuBank MasterCard</span>
        <br />
        <span className="type">Credit Cards</span>
        <br />
        <span className="class liability">Liability</span>
        <br />
        <span className="value">R$ 3.000</span>
        <div className="item-buttons">
          <button className="btn btn-delete-item">Delete</button>
          <button className="btn btn-edit-item">Edit</button>
        </div>
      </li>
    </ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Faline Silva. All rights reserved.</p>
    </footer>
  );
}

export default App;
