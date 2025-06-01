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
      <div className="item-form-buttons">
        <button type="button" className="btn btn-add-save">
          Save
        </button>
        <button type="button" className="btn btn-add-cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ItemForm;
