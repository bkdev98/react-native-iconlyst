import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeRemoveMinusBulk = ({
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
      d="M12.041 20.145a3.16 3.16 0 0 1-1.677-.494L7.3 17.735c-.257-.16-.648-.264-.995-.264a26 26 0 0 0-.928-.049h-.022c-.91-.033-1.512-.055-2.31-.714-1.039-.87-1.034-2.834-1.03-4.413L2.016 12v-.3c-.006-1.576-.012-3.54 1.027-4.407.795-.662 1.399-.683 2.312-.716h.003c.26-.01.555-.02.904-.045.383-.018.772-.1 1.037-.268l3.066-1.915c.972-.606 2.108-.656 3.116-.136 1.073.552 1.786 1.665 1.861 2.903.236 3.239.236 6.53 0 9.775a3.47 3.47 0 0 1-1.838 2.887c-.47.245-.968.367-1.463.367"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.292 12.747h4.083a.75.75 0 0 0 0-1.5h-4.083a.75.75 0 1 0 0 1.5"
    />
  </Svg>
);
export default IconlystVolumeRemoveMinusBulk;
