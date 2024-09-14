import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.148v5.54M10.05 9.148h3.896c.861 0 1.398.641 1.398 1.547v2.447c0 .906-.54 1.546-1.398 1.546H10.05c-.861 0-1.394-.64-1.394-1.546v-2.447c0-.906.533-1.547 1.393-1.547M12 9.148l-1.815-1.816M12 9.148l1.815-1.816"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 3.365a7.839 7.839 0 0 1 3.644 14.78H8.354A7.839 7.839 0 0 1 12 3.366M8.374 18.18l-.793 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.263.193.732.193 1.669.193h6.164c.937 0 1.405 0 1.669-.193a1 1 0 0 0 .408-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystGiftGlobeLight;
