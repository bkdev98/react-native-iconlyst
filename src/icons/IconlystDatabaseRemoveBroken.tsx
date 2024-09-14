import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRemoveBroken = ({
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
      d="m18.195 19.28-1.621 1.623m1.621-1.623 1.622-1.623m-1.622 1.623 1.622 1.621m-1.622-1.621-1.622-1.624M11.611 14.814c7.462 0 7.462-2.954 7.462-2.954V5.953M4.15 5.953v5.907s0 1.782 3.496 2.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.15 11.861v5.907s0 2.955 7.461 2.955M11.611 3c-4.12 0-7.462 1.33-7.462 2.972s3.341 2.972 7.462 2.972 7.462-1.33 7.462-2.972c0-1.114-1.54-2.085-3.818-2.594"
    />
  </Svg>
);
export default IconlystDatabaseRemoveBroken;
