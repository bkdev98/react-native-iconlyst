import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRicePlateLight = ({
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
      d="M3.725 9.312c.39-.35.865-.588 1.325-.832a12.4 12.4 0 0 1 1.828-.796q.698-.238 1.424-.38c.273-.054.515-.28.765-.437.288-.183.55-.423.857-.56.597-.264 1.226-.456 1.826-.714.414-.179.785-.18 1.095.157.569.622 1.304.813 2.102.877.61.048 1.141.241 1.682.585.645.41 1.438.583 2.149.898.595.263 1.125.666 1.61 1.092.506.443.578 1.157.59 1.282.011.022.022.316.022.44 0 2.299-1.619 4.303-4.075 5.468.034.114.13.731.04.923-.125.238-.284 1.211-4.97 1.211-4.677 0-4.836-.973-4.96-1.211-.09-.181 0-.832.034-.957C4.624 15.193 3 13.212 3 10.924c0-.124.022-.44.023-.44.019-.134.026-.272.075-.397.105-.269.603-.753.627-.775"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M3.022 10.483c.306 1.075 4.211 1.925 8.978 1.925s8.671-.85 8.977-1.925"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.419 9.677h.047M11.953 9.809H12M14.209 8.877h.047"
    />
  </Svg>
);
export default IconlystRicePlateLight;
