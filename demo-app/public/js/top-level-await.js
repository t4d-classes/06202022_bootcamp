const allColors = async () => {
  const res = await fetch('http://localhost:3060/colors');
  return res.json();
};

const appendColor = async (newColor) => {

  const res = await fetch('http://localhost:3060/colors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newColor),
  });

  const color = await res.json();

  return color;
};

const replaceColor = async color => {

  await fetch('http://localhost:3060/colors/' + encodeURIComponent(color.id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });

};

const deleteColor = async colorId => {

  await fetch('http://localhost:3060/colors/' + encodeURIComponent(colorId), {
    method: 'DELETE',
  });

};

// top-level await and it needs be done in a module
const colors = await allColors();
console.log(colors);