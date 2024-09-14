import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell1Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.243 8.974c-2.891-2.891-7.594-2.891-10.484 0-2.891 2.89-2.891 7.594 0 10.484A7.4 7.4 0 0 0 12 21.625a7.4 7.4 0 0 0 5.242-2.167c2.889-2.89 2.889-7.593 0-10.484"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.647 7.609c-.246-.568-.464-1.46-.238-2.16.155-.481.506-.821 1.108-1.056 1.517-.682 3.467-.683 5.008.016.565.219.915.558 1.07 1.04.226.699.007 1.592-.24 2.16q.672.34 1.276.82c.422-.847.785-2.225.392-3.441-.295-.913-.972-1.597-1.918-1.961-1.904-.866-4.282-.866-6.166-.017-.985.38-1.663 1.065-1.958 1.979-.392 1.216-.031 2.592.39 3.44a7.4 7.4 0 0 1 1.276-.82M10.113 11.134a.75.75 0 0 0-.802.112l-1.002.86a.75.75 0 0 0 .741 1.276v3.25a.75.75 0 1 0 1.5 0v-4.816a.75.75 0 0 0-.437-.682M14.455 15.243c0 .402-.328.73-.73.73a.73.73 0 0 1-.73-.73v-2.04c0-.402.328-.73.73-.73s.73.327.73.73zm-.73-4.27c-1.229 0-2.23 1-2.23 2.23v2.04a2.233 2.233 0 0 0 2.23 2.23c1.23 0 2.23-1.001 2.23-2.23v-2.04c0-1.23-1-2.23-2.23-2.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettlebell1Bulk;
