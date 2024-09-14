import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChampignonOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.997 3.75c-4.208 0-7.552 2.723-7.67 6.755v.003a2.57 2.57 0 0 0 2.48 2.654 1.894 1.894 0 0 0 1.923-1.868c.028-.487-.171-.77-.397-.917a.87.87 0 0 0-.827-.066.75.75 0 1 1-.633-1.36 2.37 2.37 0 0 1 2.28.17c.687.448 1.13 1.247 1.076 2.248a3.393 3.393 0 0 1-3.507 3.29 4.07 4.07 0 0 1-3.895-4.2c.148-5.009 4.329-8.209 9.17-8.209 4.84 0 9.028 3.2 9.176 8.21a4.07 4.07 0 0 1-3.925 4.2 3.393 3.393 0 0 1-3.477-3.292c-.046-.88.411-1.681 1.044-2.159.649-.49 1.579-.706 2.463-.242a.75.75 0 0 1-.698 1.328c-.268-.14-.576-.104-.861.111-.297.225-.467.575-.45.888l.002.024a1.894 1.894 0 0 0 1.922 1.844h.003a2.57 2.57 0 0 0 2.477-2.654v-.003c-.118-4.031-3.467-6.755-7.676-6.755"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.927 6.801c.97-1.322 2.908-1.358 4.056-.276a.75.75 0 1 1-1.03 1.092c-.57-.538-1.442-.439-1.817.072a.75.75 0 0 1-1.21-.888M14.428 10.876a.75.75 0 0 1 .846.64c.044.321.155.801.297 1.417l.143.624c.2.888.42 1.931.54 2.949.118 1.003.148 2.055-.08 2.934-.235.908-.783 1.735-1.856 2.006-1.584.4-2.908.411-4.508-.003-1.057-.274-1.597-1.104-1.836-2.002-.233-.874-.218-1.923-.117-2.925.102-1.016.302-2.059.485-2.946l.125-.6c.132-.627.234-1.114.272-1.439a.75.75 0 0 1 1.49.175c-.047.399-.17.985-.305 1.628l-.113.54c-.181.878-.368 1.857-.462 2.792-.095.949-.088 1.78.074 2.39.156.586.412.844.763.935 1.348.349 2.416.342 3.765.001.368-.093.622-.353.771-.928.157-.606.154-1.435.042-2.383-.11-.935-.314-1.914-.513-2.793l-.128-.558c-.147-.636-.281-1.215-.335-1.609a.75.75 0 0 1 .64-.845"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChampignonOutline;
