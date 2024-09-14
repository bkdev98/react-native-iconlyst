import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubLight = ({
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
      d="M15.923 20.145v-.78a3.1 3.1 0 0 0-.868-2.41c2.899-.322 5.945-1.42 5.945-6.46 0-1.29-.496-2.53-1.384-3.463a4.68 4.68 0 0 0-.084-3.48s-1.089-.323-3.609 1.366a12.36 12.36 0 0 0-6.461 0c-2.52-1.689-3.61-1.366-3.61-1.366a4.68 4.68 0 0 0-.083 3.48 5.02 5.02 0 0 0-1.384 3.49c0 5.002 3.046 6.101 5.944 6.461-.614.635-.93 1.5-.867 2.382v.803C4.846 21.552 4.846 17.86 3 17.398"
    />
  </Svg>
);
export default IconlystGithubLight;
