import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJourneyBulk = ({
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
      d="m21.39 13.02-1.97-2.56a.75.75 0 0 0-.59-.29c-.23 0-.45.11-.6.29l-1.98 2.57c-.17.23-.2.54-.07.79.12.26.38.42.67.42h1.234v.682c0 2.083-1.266 3.429-3.225 3.429h-5.89c-.31-1-1.24-1.731-2.34-1.731-1.35 0-2.44 1.09-2.44 2.44s1.09 2.44 2.44 2.44c1.07 0 1.98-.69 2.31-1.65h5.92c2.783 0 4.725-2.026 4.725-4.928v-.692H20.8c.28 0 .54-.16.67-.42.12-.26.09-.56-.08-.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m4.53 12.87.048.065a.8.8 0 0 0 .13.134l.002.001.012.008a.73.73 0 0 0 .444.161l.004.001c.07 0 .15-.01.22-.04q.012-.005.024-.011.048-.017.092-.041c.028-.014.059-.021.084-.038a.5.5 0 0 0 .19-.16l1.97-2.56c.17-.23.2-.53.08-.79a.76.76 0 0 0-.68-.42H5.916v-.101c0-2.083 1.266-3.429 3.225-3.429h5.899a2.437 2.437 0 0 0 4.77-.71c0-1.35-1.09-2.44-2.44-2.44-1.07 0-1.98.69-2.31 1.65H9.14c-2.782 0-4.724 2.027-4.724 4.929v.091H3.2a.76.76 0 0 0-.67.41c-.12.26-.09.57.08.79l1.91 2.49z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystJourneyBulk;
