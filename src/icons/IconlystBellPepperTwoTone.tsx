import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBellPepperTwoTone = ({
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
      d="M8.352 7.414a5.11 5.11 0 0 0 4.645-.803c1.08-.822 2.101-1.705 3.566-1.511 5.395.716 3.366 9.36 2.38 12.888-.735 2.634-3.833 3.27-5.874 1.776"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M13.99 17.463c-1.218 2.594-3.017 4.648-6.294 2.868-3.434-1.866-2.163-6.399-3.544-9.647a3.755 3.755 0 0 1 1.916-4.893c2.008-.903 4.589 0 5.659 1.24M12.587 6.833s-.355-1.995.735-3.833H10.58s.441 1.694.192 2.9" />
    </G>
  </Svg>
);
export default IconlystBellPepperTwoTone;
