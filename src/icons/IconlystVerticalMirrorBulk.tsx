import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalMirrorBulk = ({
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
      fillRule="evenodd"
      d="M5.09 8.154a1.43 1.43 0 0 0-1.52-.173 1.43 1.43 0 0 0-.816 1.296v5.447a1.446 1.446 0 0 0 1.44 1.44c.32 0 .635-.108.897-.318l3.396-2.724A1.43 1.43 0 0 0 9.025 12a1.43 1.43 0 0 0-.538-1.121z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.502 12.917a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M12.502 18.249a.75.75 0 0 0-.75.75V21a.75.75 0 0 0 1.5 0v-2.001a.75.75 0 0 0-.75-.75M12.502 7.583a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75M12.502 2.25a.75.75 0 0 0-.75.75v2.001a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75M21.43 7.98a1.43 1.43 0 0 0-1.521.174l-3.396 2.724a1.43 1.43 0 0 0-.54 1.122c0 .438.198.847.54 1.121l3.397 2.725a1.43 1.43 0 0 0 1.52.174c.504-.242.816-.739.816-1.297V9.276c0-.558-.312-1.054-.815-1.296" />
    </G>
  </Svg>
);
export default IconlystVerticalMirrorBulk;
