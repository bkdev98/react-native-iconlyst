import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpBulk = ({
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
      d="M9.256 9.041h1.796a1 1 0 0 0 .805-1.594L9.06 3.656c-.014-.017-.037-.024-.05-.041a1 1 0 0 0-.23-.195c-.037-.022-.066-.052-.104-.07a1 1 0 0 0-.421-.1 1 1 0 0 0-.423.1c-.038.018-.067.048-.104.07a1 1 0 0 0-.23.195c-.013.017-.035.024-.048.041L4.653 7.447a1.001 1.001 0 0 0 .805 1.594h3.797"
    />
    <Path
      fill={props.color}
      d="M19.542 6.67v8.437a6.15 6.15 0 0 1-6.145 6.143 6.15 6.15 0 0 1-6.142-6.143V9.041h2v6.066a4.147 4.147 0 0 0 4.143 4.143 4.15 4.15 0 0 0 4.143-4.143V6.67a1 1 0 0 1 2 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTurnUpBulk;
