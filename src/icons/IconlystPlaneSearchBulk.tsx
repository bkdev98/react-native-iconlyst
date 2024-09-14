import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneSearchBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.114 15.95a618 618 0 0 0 10.053-4.164c1.342-.56 2.58-1.9 2.128-3.515-.194-.687-.613-1.213-1.213-1.522-1.155-.594-2.535-.206-3.073-.011-.967.346-1.913.762-2.828 1.164l-.323.11a170 170 0 0 0-3.146-2.814l-.385-.34c-.814-.71-1.65-.965-2.481-.764-.482.112-.94.29-1.38.463q-.247.097-.505.193a.75.75 0 0 0-.435.99l2.025 4.894-1.072.455c-.845.36-1.757.748-2.49 1.055l-.294-.714a.75.75 0 0 0-1.39.568c.092.222.443 1.069.533 1.279l.058.133.02.046c.875 1.917 2.329 2.934 4.09 2.934.665 0 1.372-.145 2.108-.44"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.115 18.58h-.001l-.001.002h-.001a1.74 1.74 0 0 1-1.24.516c-.467 0-.908-.183-1.242-.517a1.73 1.73 0 0 1-.512-1.23 1.75 1.75 0 0 1 .512-1.246 1.76 1.76 0 0 1 1.243-.51 1.744 1.744 0 0 1 1.753 1.756 1.72 1.72 0 0 1-.511 1.229m2.416 1.363-.888-.89a3.2 3.2 0 0 0 .483-1.698 3.24 3.24 0 0 0-.955-2.314 3.273 3.273 0 0 0-4.6.002 3.24 3.24 0 0 0-.953 2.312 3.2 3.2 0 0 0 .953 2.287 3.22 3.22 0 0 0 2.3.956 3.24 3.24 0 0 0 1.71-.484l.888.889a.749.749 0 1 0 1.062-1.06M12.557 19.723h-7.64a.75.75 0 0 0 0 1.5h7.64a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneSearchBulk;
