import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudTransferBold = ({
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
      d="M17.516 8.814a.21.21 0 0 1-.183-.18c-.295-2.107-2.01-4.74-5.331-4.74-3.572 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222c.803.326 1.5.375 1.844.375h.604a.2.2 0 0 0 .2-.2v-.045a.21.21 0 0 0-.161-.202 2.498 2.498 0 0 1-.833-4.443l2.028-1.47a2.5 2.5 0 0 1 2.603-.2c.113.058.216.13.315.206.076.06.183.059.26.002a2.46 2.46 0 0 1 1.463-.486 2.5 2.5 0 0 1 2.5 2.5v1.606c0 .096.068.178.161.202.542.14 1.04.464 1.394.954.254.351.402.747.453 1.149.016.128.139.22.262.182q.183-.057.378-.133a4.64 4.64 0 0 0 2.716-4.22c0-2.482-1.594-4.29-3.948-4.582"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.766 12.992a.75.75 0 0 0-.78.06l-2.03 1.469a.75.75 0 0 0 .88 1.215l.84-.607v4.226a.75.75 0 0 0 1.5 0V13.66a.75.75 0 0 0-.41-.668M15.19 17.275l-.84.607v-4.226a.75.75 0 0 0-1.5 0v5.695a.752.752 0 0 0 1.19.607l2.029-1.468a.75.75 0 1 0-.88-1.215"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudTransferBold;
