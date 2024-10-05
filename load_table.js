function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}

function generate_number_of_asr_models_table(tableId, uttids, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < ref_names.length) {
      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/enroll.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/gt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/spk_6.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/all.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/spk_all.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}

function generate_target_speech_length_table(tableId, uttids, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < ref_names.length) {
      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/enroll.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/gt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length0.9.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length1.0.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length1.1.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length1.2.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length1.3.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(tableId + "/" + uttids[i] + '/length1.5.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}




uttids_for_number_of_asr_models = ["1089_134691_000039_000001", "121_121726_000020_000001", "1320_122612_000035_000003", "1580_141083_000010_000002", "1580_141083_000018_000000", "1580_141084_000068_000000", "1995_1826_000030_000002", "1995_1836_000007_000001", "3570_5694_000011_000001", "3570_5695_000002_000004", "4446_2271_000007_000004"]
uttids_for_target_speech_length = ["1089_134691_000039_000001", "121_121726_000020_000001", "1320_122612_000035_000003", "1580_141083_000010_000002", "1580_141083_000018_000000", "1580_141084_000068_000000", "1995_1826_000030_000002", "1995_1836_000007_000001", "3570_5694_000011_000001", "3570_5695_000002_000004", "4446_2271_000007_000004"]

generate_number_of_asr_models_table('number_of_asr_models', uttids_for_number_of_asr_models, 1);
generate_target_speech_length_table('target_speech_length', uttids_for_target_speech_length, 1);

$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#number_of_asr_models-' + i;
    $(id).click(function() {
      generate_number_of_asr_models_table(
          'number_of_asr_models',
          uttids_for_number_of_asr_models, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});


$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#target_speech_length' + i;
    $(id).click(function() {
      generate_target_speech_length_table(
          'target_speech_length',
          uttids_for_target_speech_length, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
