import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStrawberryHalfTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.026 19.764c1.973-1.972 3.18-4.523 3.178-7.344 0-2.068-1.73-3.811-3.81-3.811H9.606c-2.08-.001-3.812 1.743-3.811 3.81 0 2.821 1.206 5.37 3.178 7.343 1.647 1.65 4.403 1.65 6.052.002"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.548 15.544c.384-.76.62-1.741.62-2.827 0-1.98-2.419-1.879-2.418 0 0 1.085.235 2.067.62 2.826.32.635.857.635 1.178 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3c-1.457 1.072-1.485 2.376-1.317 2.895-.226-.38-1.193-1.082-3.258-.864C7.425 6.315 8.487 8.61 12 8.61c3.405 0 4.574-2.294 4.575-3.578-2.064-.218-3.032.485-3.258.864.168-.519.14-1.823-1.317-2.895M15.36 12.1l.008.005M9.05 16.1l.009.005M12.065 18.385l.008.005M15.02 15.906l.008.005M8.448 12.153l.008.005"
    />
  </Svg>
);
export default IconlystStrawberryHalfTwoTone;
