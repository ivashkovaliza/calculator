export default (id) =>
  `<div class="calculator">
    <div class="calculator__body">
      <table id="table_${id}" class="calculator__content">
        <thead>
          <tr>
            <th id="output-screen_${id}" colspan="4" class="calculator__output-screen"></th>
          </tr>
        </thead>
        <tbody class="calculator__buttons">
          <tr>
            <td class="calculator__button">MC</td>
            <td class="calculator__button">M+</td>
            <td class="calculator__button">M-</td>
            <td class="calculator__button">MR</td>
          </tr>
          <tr>
            <td class="calculator__button">C</td>
            <td class="calculator__button">±</td>
            <td class="calculator__button">÷</td>
            <td class="multiply calculator__button">×</td>
          </tr>
          <tr>
            <td class="number calculator__button">7</td>
            <td class="number calculator__button">8</td>
            <td class="number calculator__button">9</td>
            <td class="calculator__button">-</td>
          </tr>
          <tr>
            <td class="number calculator__button">4</td>
            <td class="number calculator__button">5</td>
            <td class="number calculator__button">6</td>
            <td class="plus calculator__button">+</td>
          </tr>
          <tr>
            <td class="number calculator__button">1</td>
            <td class="number calculator__button">2</td>
            <td class="number calculator__button">3</td>
            <td rowspan="2" class="equal-sign calculator__button">=</td>
          </tr>
          <tr>
            <td colspan="2" class="number calculator__button">0</td>
            <td class="calculator__button">.</td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>`;