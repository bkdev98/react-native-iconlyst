import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels3Outline = ({
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
      d="M4.2 3.76c.904-.97 2.19-1.51 3.702-1.51h8.696c1.515 0 2.801.54 3.705 1.51.897.964 1.361 2.292 1.361 3.776v8.928c0 1.484-.464 2.812-1.362 3.776-.903.97-2.19 1.51-3.705 1.51H7.902c-1.516 0-2.802-.54-3.705-1.51-.897-.964-1.361-2.292-1.361-3.776V7.536c0-1.485.466-2.812 1.364-3.776m1.098 1.023c-.597.64-.962 1.58-.962 2.753v8.928c0 1.174.364 2.114.959 2.754.59.633 1.462 1.032 2.607 1.032h8.695c1.145 0 2.018-.4 2.608-1.032.595-.64.96-1.58.96-2.754V7.536c0-1.174-.365-2.114-.96-2.754-.59-.633-1.462-1.032-2.607-1.032H7.902c-1.141 0-2.013.399-2.604 1.033"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.976 12.596a15.6 15.6 0 0 0 0 3.34c.029.216.119.3.176.333.063.035.21.078.468-.023a8.2 8.2 0 0 0 2.402-1.508c.203-.187.253-.358.253-.477 0-.12-.054-.288-.251-.466l-.003-.003a8 8 0 0 0-2.408-1.51l-.006-.002c-.207-.087-.357-.06-.44-.017-.07.037-.162.122-.191.333m1.208-1.7c-.56-.236-1.184-.239-1.714.039-.541.284-.896.817-.982 1.472l-.002.013a17 17 0 0 0 0 3.68l.001.015c.077.617.394 1.16.93 1.461.532.3 1.165.297 1.755.064l.006-.002a9.7 9.7 0 0 0 2.853-1.79l.004-.004c.466-.428.743-.986.74-1.591-.004-.603-.285-1.153-.742-1.568a9.6 9.6 0 0 0-2.849-1.79M2.947 8.207a.75.75 0 0 1 .75-.75h17.105a.75.75 0 0 1 0 1.5H3.697a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.025 2.282a.75.75 0 0 1 .924.52l1.448 5.199a.75.75 0 0 1-1.445.402l-1.448-5.198a.75.75 0 0 1 .521-.923m4.285 0a.75.75 0 0 1 .924.52l1.448 5.199a.75.75 0 1 1-1.444.402l-1.449-5.198a.75.75 0 0 1 .521-.923m-8.494.071a.75.75 0 0 1 .92.528l1.387 5.125a.75.75 0 1 1-1.448.392L6.288 3.273a.75.75 0 0 1 .528-.92"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels3Outline;
