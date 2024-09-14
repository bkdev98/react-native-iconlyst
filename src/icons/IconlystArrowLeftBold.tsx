import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="m13.163 11.64.002.353c0 1.472-.086 2.814-.216 3.688l-.114.544c-.063.288-.146.616-.233.784A1.82 1.82 0 0 1 11 18h-.058c-.433-.014-1.343-.394-1.343-.408-1.464-.614-4.289-2.468-5.593-3.79l-.38-.396c-.098-.108-.21-.235-.28-.334A1.77 1.77 0 0 1 3 12.008c0-.423.13-.817.375-1.138l.39-.42.087-.09c1.184-1.283 4.274-3.382 5.89-4.024l.245-.094c.294-.105.705-.23.955-.242a2 2 0 0 1 .91.22c.36.203.649.525.808.904.101.262.26 1.05.26 1.064.147.794.231 2.047.243 3.451M21 12a1.51 1.51 0 0 1-1.503 1.518l-3.7-.327c-.65 0-1.179-.533-1.179-1.19 0-.66.528-1.191 1.18-1.191l3.699-.327c.83 0 1.503.68 1.503 1.517"
    />
  </Svg>
);
export default IconlystArrowLeftBold;
