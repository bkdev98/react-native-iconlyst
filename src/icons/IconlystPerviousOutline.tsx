import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousOutline = ({
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
      d="M5.25 5.021a.75.75 0 0 1 .75.75v12.456a.75.75 0 0 1-1.5 0V5.77a.75.75 0 0 1 .75-.75M15.719 6.845a18.7 18.7 0 0 0-5.469 3.464c-.594.552-.837 1.156-.834 1.706.003.552.254 1.146.832 1.675l.003.003c1.59 1.47 3.423 2.616 5.475 3.465l.006.003c.652.277 1.253.236 1.69.004.425-.226.782-.676.879-1.406.262-2.348.268-4.872 0-7.514-.091-.716-.421-1.17-.824-1.399-.407-.23-1.007-.299-1.758-.001m2.499-1.303c.882.501 1.435 1.416 1.572 2.526l.002.016c.28 2.746.274 5.381-.001 7.848l-.002.014c-.152 1.167-.766 2.068-1.665 2.545-.887.47-1.965.48-2.975.052-2.202-.912-4.187-2.15-5.915-3.748-.838-.767-1.312-1.742-1.318-2.772-.005-1.031.46-2.021 1.316-2.815l.004-.005a20.2 20.2 0 0 1 5.92-3.749l.006-.002c1.087-.432 2.176-.41 3.056.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPerviousOutline;
