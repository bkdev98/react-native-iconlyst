import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangle2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.839 9.6a1 1 0 0 0-.84-.735c-.037-.005-.073.007-.111.006-.09-.002-.18-.01-.27.015l-2.002.523a1 1 0 0 0-.255 1.829l.4.236-2.38 4.07a2.74 2.74 0 0 0-.018 2.764 2.73 2.73 0 0 0 2.372 1.398l1.916.021h.01a1 1 0 0 0 .013-2l-1.918-.021a.74.74 0 0 1-.652-.386.75.75 0 0 1 .004-.767l2.378-4.065.405.239A1 1 0 0 0 9 12.662a1 1 0 0 0 .365-1.05zM10.414 7.348l.98-1.649a.75.75 0 0 1 .654-.37.78.78 0 0 1 .669.387l2.326 4.096-.411.231a1 1 0 0 0 .225 1.835l2.007.553a1 1 0 0 0 .76-.094c.23-.132.399-.349.47-.604l.549-1.994a1.002 1.002 0 0 0-1.456-1.137l-.403.227-2.328-4.1a2.74 2.74 0 0 0-2.384-1.4h-.025c-.987 0-1.873.504-2.373 1.351l-.979 1.647a1 1 0 1 0 1.719 1.021M20.63 15.554l-.952-1.66a.999.999 0 1 0-1.735.995l.955 1.662a.75.75 0 0 1-.002.758.75.75 0 0 1-.661.386l-4.712.011v-.47a1 1 0 0 0-1.709-.706l-1.468 1.475a1 1 0 0 0 .004 1.415l1.467 1.46a1 1 0 0 0 1.088.214 1 1 0 0 0 .617-.923v-.465l4.716-.01a2.74 2.74 0 0 0 2.39-1.388 2.73 2.73 0 0 0 .003-2.754"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshTriangle2Bold;
