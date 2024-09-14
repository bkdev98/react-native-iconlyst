import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M12 3.882h-.01c-4.127 0-7.844 2.924-9.931 7.827a.75.75 0 0 0 0 .58c.673 1.585 1.521 2.964 2.497 4.106l3.61-3.643a4.6 4.6 0 0 1-.068-.748c0-2.176 1.746-3.938 3.902-3.938.254 0 .507.03.741.069L16 4.845a8.86 8.86 0 0 0-4-.963m9.941 7.827c-.897-2.107-2.097-3.86-3.512-5.16l-3.21 3.24c.42.63.674 1.398.674 2.215 0 2.166-1.747 3.928-3.893 3.928-.81 0-1.57-.257-2.195-.679l-3.093 3.12c1.59 1.133 3.395 1.753 5.278 1.753H12c4.137 0 7.854-2.934 9.941-7.836a.75.75 0 0 0 0-.581"
        opacity={0.4}
      />
      <Path d="M20.205 3.714a.73.73 0 0 1 0 1.044L18.43 6.55l-3.21 3.239-1.413 1.426.35-.353c.176.335.274.729.274 1.142 0 1.349-1.093 2.452-2.43 2.452-.41 0-.799-.099-1.13-.276l-6.05 6.104a.72.72 0 0 1-.517.216.7.7 0 0 1-.517-.216.74.74 0 0 1-.088-.926l.029-.04L14.195 8.757l3.093-3.121.868-.877c.02-.02.04-.04.05-.06.019-.02.038-.039.048-.058l.917-.926a.73.73 0 0 1 1.034 0" />
    </G>
  </Svg>
);
export default IconlystHideBulk;
