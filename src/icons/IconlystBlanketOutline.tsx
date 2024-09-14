import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlanketOutline = ({
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
      d="M2.25 11.426a3.017 3.017 0 0 1 3.017-3.018h2.728c.853 0 1.66.384 2.2 1.044l1.766 2.162a.344.344 0 0 0 .532.001l1.767-2.163a2.85 2.85 0 0 1 2.2-1.044h2.272a3.02 3.02 0 0 1 3.018 3.018v1.147a3.02 3.02 0 0 1-3.018 3.018H5.267a3.017 3.017 0 0 1-3.017-3.018zm3.017-1.518c-.838 0-1.517.68-1.517 1.518v1.147c0 .84.68 1.518 1.517 1.518h13.465c.838 0 1.518-.679 1.518-1.518v-1.147c0-.838-.68-1.518-1.518-1.518H16.46c-.401 0-.783.18-1.039.494l-1.766 2.162a1.844 1.844 0 0 1-2.854 0l-1.768-2.163a1.34 1.34 0 0 0-1.038-.493z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 5.744a3.017 3.017 0 0 1 3.017-3.018h13.465a3.02 3.02 0 0 1 3.018 3.018V6.89a3.02 3.02 0 0 1-3.018 3.018H5.267A3.02 3.02 0 0 1 2.25 6.89zm3.017-1.518c-.838 0-1.517.679-1.517 1.518V6.89c0 .838.68 1.518 1.517 1.518h13.465c.838 0 1.518-.68 1.518-1.518V5.744c0-.839-.68-1.518-1.518-1.518zM5.267 15.591c-.837 0-1.517.68-1.517 1.518v1.147c0 .84.68 1.518 1.517 1.518h13.465c.838 0 1.518-.68 1.518-1.518V17.11c0-.838-.68-1.518-1.518-1.518zM2.25 17.11a3.02 3.02 0 0 1 3.017-3.018h13.465a3.02 3.02 0 0 1 3.018 3.018v1.147a3.02 3.02 0 0 1-3.018 3.018H5.267a3.017 3.017 0 0 1-3.017-3.018z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlanketOutline;
