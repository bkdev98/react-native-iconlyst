import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldRemoveBold = ({
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
      d="M14.324 13.039a.75.75 0 1 1-1.061 1.061L12 12.835 10.736 14.1a.749.749 0 1 1-1.06-1.061l1.263-1.265-1.263-1.264a.75.75 0 0 1 0-1.061.75.75 0 0 1 1.06 0L12 10.714l1.263-1.265a.75.75 0 1 1 1.06 1.061l-1.263 1.264zm5.03-7.902C18.653 4.431 13.025 2.5 12 2.5S5.348 4.431 4.643 5.137c-.56.562-.552.996-.508 3.397.018.974.042 2.3.042 4.136 0 6.407 7.6 8.785 7.678 8.808a.48.48 0 0 0 .29 0c.076-.023 7.679-2.401 7.679-8.808 0-1.829.024-3.153.042-4.125.043-2.411.05-2.845-.511-3.408"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldRemoveBold;
