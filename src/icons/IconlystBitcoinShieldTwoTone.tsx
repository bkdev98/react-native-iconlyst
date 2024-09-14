import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinShieldTwoTone = ({
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
      d="M19.824 12.67c0 6.113-7.324 8.33-7.324 8.33s-7.323-2.216-7.323-8.33c0-6.115-.267-6.592.32-7.18C6.088 4.9 11.54 3 12.5 3s6.413 1.896 7 2.49c.59.592.324 1.066.324 7.18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.785 12.002h-2.24v3.207h2.309c.938 0 1.687-.805 1.596-1.761-.08-.834-.828-1.446-1.665-1.446M12.785 8.795h-2.24v3.207h2.309c.938 0 1.687-.805 1.596-1.761-.08-.834-.828-1.446-1.665-1.446M12.213 16.155v-.946M12.213 8.791v-.945"
    />
  </Svg>
);
export default IconlystBitcoinShieldTwoTone;
