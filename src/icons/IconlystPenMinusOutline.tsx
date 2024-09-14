import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenMinusOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M7.837 20.058a1.583 1.583 0 0 1-1.514-1.991 28.2 28.2 0 0 0 .666-7.35 1.57 1.57 0 0 1 1.309-1.593l6.031-1a.75.75 0 1 1 .244 1.48l-6.023 1a.073.073 0 0 0-.061.077 29.7 29.7 0 0 1-.72 7.786l.29.812-.2-.723a30.2 30.2 0 0 1 7.795-.716c.007.01.06-.037.067-.075l.995-6.014a.751.751 0 0 1 1.481.246l-1 6.022a1.6 1.6 0 0 1-1.58 1.32 28.6 28.6 0 0 0-7.363.663 1.6 1.6 0 0 1-.417.056"
    />
    <Path
      fill={props.color}
      d="M18.731 13.285a2.24 2.24 0 0 1-1.581-.651L13.694 9.18a2.24 2.24 0 0 1-.375-2.66l.578-1.043a2.018 2.018 0 0 1 3.191-.452l4.214 4.215a2.018 2.018 0 0 1-.45 3.19l-1.044.579c-.33.181-.7.276-1.077.276m-4.1-6.037a.735.735 0 0 0 .123.872l3.456 3.454a.74.74 0 0 0 .872.122l1.043-.577a.52.52 0 0 0 .116-.82L16.03 6.087a.5.5 0 0 0-.439-.145.52.52 0 0 0-.38.262zM6.83 6.826H3.145a.75.75 0 1 1 0-1.5H6.83a.75.75 0 0 1 0 1.5M7.257 19.82a.749.749 0 0 1-.53-1.28l4.089-4.088a.75.75 0 1 1 1.06 1.06l-4.088 4.09a.75.75 0 0 1-.531.219"
    />
    <Path
      fill={props.color}
      d="M12.265 16.112a2.049 2.049 0 0 1-1.448-3.5 2.1 2.1 0 0 1 2.9 0 2.05 2.05 0 0 1-1.449 3.5zm0-2.6a.549.549 0 0 0-.389.938.563.563 0 0 0 .778 0 .55.55 0 0 0-.389-.937"
    />
  </Svg>
);
export default IconlystPenMinusOutline;
