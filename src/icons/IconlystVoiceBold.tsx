import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M19.531 9.826c.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0 1 12 22a.96.96 0 0 1-.968-.957v-1.925C6.799 18.64 3.5 15.087 3.5 10.783c0-.53.434-.957.969-.957s.968.428.968.957c0 3.573 2.944 6.48 6.563 6.48s6.563-2.907 6.563-6.48c0-.53.434-.957.968-.957M12.175 2c2.403 0 4.352 1.924 4.352 4.297v4.623c0 2.373-1.949 4.297-4.352 4.297h-.35c-2.403 0-4.351-1.924-4.351-4.297V6.297C7.474 3.924 9.422 2 11.825 2Z"
    />
  </Svg>
);
export default IconlystVoiceBold;
