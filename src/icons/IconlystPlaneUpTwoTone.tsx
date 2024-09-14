import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneUpTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3c-1.293 0-1.867 1.462-1.924 2.546-.056 1.053-.043 2.11-.026 3.165.005.366-.103.56-.45.72a178 178 0 0 0-4.093 1.94c-.593.287-1.1.702-1.213 1.384-.097.585-.081 1.188-.118 1.825l5.814.047.28 3.035-1.873 1.536V21l3.603-.901"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3c1.292 0 1.866 1.462 1.924 2.546.056 1.053.042 2.11.026 3.165-.006.366.103.56.45.72 1.375.624 2.735 1.28 4.094 1.94.592.287 1.098.702 1.212 1.384.097.585.082 1.188.119 1.825l-5.816.047-.297 3.035 1.89 1.536V21l-3.602-.901"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneUpTwoTone;
