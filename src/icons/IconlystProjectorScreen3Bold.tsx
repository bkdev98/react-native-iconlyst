import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3Bold = ({
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
      d="M17.19 9.76c0 1.9-1.55 3.45-3.46 3.45-1.9 0-3.44-1.55-3.44-3.45 0-1.02.44-1.94 1.15-2.57a3.45 3.45 0 0 1 2.29-.88c.88 0 1.69.33 2.3.88.71.63 1.16 1.55 1.16 2.57M7.15 12.12a.749.749 0 1 1-1.5 0v-1.45a.749.749 0 1 1 1.5 0zm11.231-5.43h-.771a4.92 4.92 0 0 0-3.88-1.88c-1.56 0-2.96.73-3.87 1.88H5.618C3.782 6.69 2.5 8.026 2.5 9.94v4.36c0 1.913 1.282 3.25 3.118 3.25h.086l-.194.686a.75.75 0 0 0 1.444.408l.309-1.094h9.476l.308 1.094a.751.751 0 0 0 1.444-.408l-.194-.686h.084c1.836 0 3.119-1.337 3.119-3.25V9.94c0-1.944-1.253-3.25-3.119-3.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 8.13c0 .41.34.75.75.75.49 0 .89.39.89.88s-.4.88-.89.88c-.48 0-.88-.39-.88-.88a.749.749 0 1 0-1.5 0 2.386 2.386 0 0 0 4.77 0c0-1.31-1.07-2.38-2.39-2.38-.41 0-.75.34-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProjectorScreen3Bold;
