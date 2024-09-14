import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingKeyTwoTone = ({
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
      d="m13.525 10.51-4.236-.001a3.3 3.3 0 0 0-.437-.557 3.296 3.296 0 1 0 .605 3.833l.96-.001.556-.558.85.85.864-.864.553.553a.4.4 0 0 0 .567 0l1.286-1.287a.4.4 0 0 0 0-.566l-1.285-1.285a.4.4 0 0 0-.284-.118"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.09 18.308q.294.328.62.625c.316.288.754.406 1.17.3l1.264-.319c.276-.07.563-.036.826.074l.008.004c.263.109.49.29.633.535l.661 1.123c.217.37.608.599 1.036.621q.44.022.88.003c.428-.02.82-.246 1.04-.614l.672-1.128c.14-.233.352-.414.604-.518l.054-.024c.254-.106.534-.126.8-.057l1.272.33c.414.106.852-.008 1.17-.295q.328-.294.625-.62c.288-.316.406-.754.3-1.17l-.322-1.273a1.26 1.26 0 0 1 .082-.847c.104-.255.288-.468.526-.607l1.131-.665c.37-.218.598-.608.621-1.036a9 9 0 0 0 .003-.88 1.27 1.27 0 0 0-.615-1.04l-1.12-.668a1.3 1.3 0 0 1-.532-.636l-.003-.008a1.3 1.3 0 0 1-.07-.827l.328-1.262a1.28 1.28 0 0 0-.294-1.172 9 9 0 0 0-.62-.623 1.27 1.27 0 0 0-1.17-.301l-1.265.32a1.3 1.3 0 0 1-.824-.073l-.01-.004a1.3 1.3 0 0 1-.631-.535l-.662-1.125a1.27 1.27 0 0 0-1.037-.62 9 9 0 0 0-.88-.003c-.427.02-.82.246-1.039.614l-.668 1.12a1.3 1.3 0 0 1-.636.532l-.009.004c-.263.108-.551.14-.827.069l-1.261-.328a1.27 1.27 0 0 0-1.172.294 9 9 0 0 0-.623.62"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.904 12.27h.014"
    />
  </Svg>
);
export default IconlystSettingKeyTwoTone;
