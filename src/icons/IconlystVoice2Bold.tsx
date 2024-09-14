import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Bold = ({
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
      d="M19.531 9.826c.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0 1 12 22a.96.96 0 0 1-.968-.957v-1.925C6.799 18.64 3.5 15.087 3.5 10.783c0-.53.434-.957.969-.957s.968.428.968.957c0 3.573 2.944 6.48 6.563 6.48s6.563-2.907 6.563-6.48c0-.53.434-.957.968-.957M12.175 2a4.345 4.345 0 0 1 4.19 3.131.388.388 0 0 1-.376.494h-1.133a.616.616 0 0 0-.62.61c0 .34.278.614.62.614H15.9c.346 0 .627.277.627.618 0 .342-.28.618-.627.618h-1.044a.617.617 0 0 0-.62.613c0 .338.278.612.62.612H15.9c.346 0 .627.277.627.62 0 .34-.28.616-.627.616h-1.044a.617.617 0 0 0-.62.614c0 .337.278.61.62.61h1.077c.266 0 .456.257.372.506a4.35 4.35 0 0 1-4.13 2.94h-.35c-2.403 0-4.351-1.923-4.351-4.296V6.297C7.474 3.924 9.422 2 11.825 2Z"
    />
  </Svg>
);
export default IconlystVoice2Bold;
