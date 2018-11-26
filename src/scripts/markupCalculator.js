export default (id, memoryLabel) =>
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
            <td id="output-memory_${id}" class="memory-value" colspan="4">${memoryLabel}</td>
          </tr>
          <tr>
            <td><button class="memory-clear calculator__button" value="MC">MC</button></td>
            <td><button class="memory-plus calculator__button" value="M+">M+</button></td>
            <td><button class="memory-minus calculator__button" value="M-">M-</button></td>
            <td><button class="memory-read calculator__button" value="MR">MR</button></td>
          </tr>
          <tr>
            <td><button class="clear calculator__button" value="C">C</button></td>
            <td><button class="reversion-sign calculator__button" value="±">±</button></td>
            <td><button class="divide calculator__button" value="÷">÷</button></td>
            <td><button class="multiply calculator__button" value="×">×</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button" value="7">7</button></td>
            <td><button class="number calculator__button" value="8">8</button></td>
            <td><button class="number calculator__button" value="9">9</button></td>
            <td><button class="subtraction calculator__button" value="-">-</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button" value="4">4</button></td>
            <td><button class="number calculator__button" value="5">5</button></td>
            <td><button class="number calculator__button" value="6">6</button></td>
            <td><button class="plus calculator__button" value="=">+</button></td>
          </tr>
          <tr>
            <td><button class="number calculator__button" value="1">1</button></td>
            <td><button class="number calculator__button" value="2">2</button></td>
            <td><button class="number calculator__button" value="3">3</button></td>
            <td rowspan="2"><button class="equal-sign calculator__button calculator__button--high-btn" value="=">=</button></td>
          </tr>
          <tr>
            <td colspan="2"><button class="number calculator__button" value="0">0</button></td>
            <td><button class="dot calculator__button" value=".">.</button></td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>`;