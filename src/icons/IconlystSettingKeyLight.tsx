import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingKeyLight = ({
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
      d="m13.525 10.51-4.236-.001a3.3 3.3 0 0 0-.437-.557 3.296 3.296 0 1 0 .605 3.833l.96-.001.557-.558.85.85.863-.864.553.553a.4.4 0 0 0 .567 0l1.286-1.287a.4.4 0 0 0 0-.566l-1.285-1.285a.4.4 0 0 0-.283-.118"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.09 18.308q.294.328.62.625c.317.288.754.406 1.17.3l1.265-.319c.275-.07.563-.036.825.074l.009.004c.263.109.489.29.633.535l.66 1.123c.218.37.609.599 1.036.621q.44.022.88.003c.429-.02.82-.246 1.04-.614l.673-1.128c.14-.233.351-.414.603-.518q.027-.013.055-.024c.253-.106.533-.126.8-.057l1.27.33c.415.106.853-.008 1.171-.295q.328-.294.625-.62c.288-.316.406-.754.3-1.17l-.321-1.273a1.26 1.26 0 0 1 .059-.791l.022-.056c.105-.255.288-.468.526-.607l1.131-.665c.37-.218.599-.608.621-1.036q.023-.44.003-.88a1.27 1.27 0 0 0-.614-1.04l-1.122-.668a1.3 1.3 0 0 1-.53-.636l-.004-.008a1.3 1.3 0 0 1-.07-.827l.328-1.262a1.28 1.28 0 0 0-.294-1.172 9 9 0 0 0-.62-.623 1.27 1.27 0 0 0-1.17-.301l-1.265.32a1.3 1.3 0 0 1-.824-.073l-.01-.004a1.3 1.3 0 0 1-.631-.535l-.662-1.125a1.27 1.27 0 0 0-1.036-.62 9 9 0 0 0-.88-.003c-.428.02-.82.246-1.04.614l-.668 1.12a1.3 1.3 0 0 1-.636.532l-.008.004c-.264.108-.552.14-.828.069l-1.261-.328a1.27 1.27 0 0 0-1.171.294 9 9 0 0 0-.624.62M5.904 12.27h.014"
    />
  </Svg>
);
export default IconlystSettingKeyLight;
