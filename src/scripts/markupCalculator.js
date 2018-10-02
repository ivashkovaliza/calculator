export default (id) =>
  `<div class="calculator">
    <div class="calculator__body">
      <table id="table_${id}" class="calculator__content">
        <thead>
          <tr>
            <th id="output-screen_${id}" colspan="4" class="calculator__output-screen"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button class="calculator__button">MC</button></td>
            <td><button class="calculator__button">M+</button></td>
            <td><button class="calculator__button">M-</button></td>
            <td><button class="calculator__button">MR</button></td>
          </tr>
          <tr>
            <td><button class="clear calculator__button">C</button></td>
            <td><button class="calculator__button">±</button></td>
            <td><button class="calculator__button">÷</button></td>
            <td><button class="multiply calculator__button">×</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button">7</button></td>
            <td><button class="number calculator__button">8</button></td>
            <td><button class="number calculator__button">9</button></td>
            <td><button class="calculator__button">-</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button">4</button></td>
            <td><button class="number calculator__button">5</button></td>
            <td><button class="number calculator__button">6</button></td>
            <td><button class="plus calculator__button">+</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button">1</button></td>
            <td><button class="number calculator__button">2</button></td>
            <td><button class="number calculator__button">3</button></td>
            <td rowspan="2"><button class="equal-sign calculator__button calculator__button--high-btn">=</button></td>
          </tr>
          <tr>
            <td colspan="2"><button class="number calculator__button">0</button></td>
            <td><button class="calculator__button">.</button></td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>`;