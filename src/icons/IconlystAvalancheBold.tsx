import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAvalancheBold = ({
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
      d="m14.794 7.291-.017-.023-2.159-2.852a1.26 1.26 0 0 0-1.068-.485 1.24 1.24 0 0 0-1.001.617l-7.878 13.5a1.23 1.23 0 0 0-.005 1.247c.225.392.63.625 1.083.625h3.833c1.006 0 2.051-.62 2.593-1.536l4.764-7.647c.657-.985.6-2.338-.145-3.446M21.317 18.134l-2.875-4.85a1.28 1.28 0 0 0-1.106-.626c-.458 0-.872.235-1.105.628l-2.875 4.848c-.239.399-.245.88-.015 1.285.231.408.65.652 1.121.652h5.751c.47 0 .888-.244 1.12-.652a1.26 1.26 0 0 0-.016-1.285"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAvalancheBold;
