import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterRefreshOutline = ({
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
      fillRule="evenodd"
      d="M15.543 2.25a.75.75 0 0 1 .75.75v1.594a.75.75 0 0 1-.805.78H13.91a.75.75 0 0 1-.202-1.473A2.2 2.2 0 1 0 14.79 7.09a.75.75 0 0 1 1.283.777 3.7 3.7 0 1 1-1.25-5.08.75.75 0 0 1 .72-.536M3.56 7.103a3.33 3.33 0 0 1 3.33-3.33.75.75 0 0 1 0 1.5 1.83 1.83 0 0 0-1.83 1.83v1.972c0 .755.297 1.48.827 2.018l4.18 3.72.032.03c.418.419.652.986.652 1.577v3.1c0 .515.52.868 1 .677l1.808-.72a.73.73 0 0 0 .46-.678v-1.912c0-.624.261-1.22.722-1.643l4.724-4.671.025-.024c.604-.544.949-1.32.949-2.134V7.103a1.83 1.83 0 0 0-1.83-1.83.75.75 0 0 1 0-1.5 3.33 3.33 0 0 1 3.33 3.33v1.312c0 1.232-.52 2.408-1.431 3.236l-4.723 4.67-.026.025a.73.73 0 0 0-.24.54V18.8a2.23 2.23 0 0 1-1.404 2.07l-1.81.721a2.23 2.23 0 0 1-3.054-2.07v-3.1a.73.73 0 0 0-.2-.503l-4.179-3.72-.032-.03a4.38 4.38 0 0 1-1.28-3.092z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterRefreshOutline;
