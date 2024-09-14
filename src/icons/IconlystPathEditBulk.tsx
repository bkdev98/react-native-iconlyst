import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathEditBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.852 17.448V8.442h1.073c.735 0 1.256-.458 1.256-1.194V6.176h9.005v1.072c0 .733.52 1.194 1.256 1.194h1.064V13.9a1.34 1.34 0 0 0-1.045.428l-3.61 4c-.325.364-.529.822-.581 1.308l-.021.193H8.18v-1.186c0-.737-.52-1.195-1.256-1.195zM18.755 19.83h.75v-.832z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.94 3.195c-.523 0-1.031.165-1.416.523-.39.363-.59.869-.59 1.422v2.108c0 .552.2 1.057.59 1.42.384.359.892.524 1.416.524h1.985c.522 0 1.03-.164 1.414-.522.39-.363.592-.869.592-1.422V5.14c0-.554-.201-1.06-.592-1.423-.384-.357-.892-.522-1.414-.522zM4.434 5.14c0-.183.059-.275.112-.325.06-.055.18-.12.394-.12h1.985c.212 0 .333.065.393.12.053.05.113.142.113.325v2.108c0 .182-.06.274-.113.324-.06.056-.18.12-.393.12H4.94c-.213 0-.333-.064-.393-.12-.054-.051-.113-.143-.113-.324zM18.443 3.195c-.523 0-1.031.165-1.416.523-.39.363-.59.869-.59 1.422v2.108c0 .552.2 1.057.59 1.42.383.359.891.524 1.415.524h1.985c.523 0 1.03-.164 1.415-.522.39-.363.59-.869.59-1.422V5.14c0-.553-.2-1.059-.59-1.422-.384-.358-.892-.523-1.415-.523zm-.507 1.945c0-.183.06-.275.113-.325.06-.055.18-.12.393-.12h1.985c.213 0 .333.065.393.12.053.05.113.142.113.325v2.108c0 .183-.06.275-.113.324-.06.056-.18.12-.393.12h-1.985c-.212 0-.332-.064-.392-.12-.055-.051-.114-.143-.114-.324zM4.94 16.698c-.523 0-1.031.165-1.416.522-.39.364-.59.87-.59 1.423v2.107c0 .553.2 1.058.59 1.421.384.358.892.524 1.416.524h1.985c.522 0 1.03-.164 1.414-.522.39-.363.592-.869.592-1.423v-2.107c0-.554-.201-1.06-.592-1.423-.384-.357-.892-.522-1.414-.522zm-.506 1.945c0-.183.059-.275.112-.325.06-.055.18-.12.394-.12h1.985c.212 0 .333.065.393.12.053.05.113.142.113.325v2.107c0 .183-.06.275-.113.325-.06.056-.18.12-.393.12H4.94c-.213 0-.333-.065-.393-.12-.054-.051-.113-.144-.113-.325zM17.91 13.82a2.09 2.09 0 0 1 2.955-.115l.899.831a2.09 2.09 0 0 1 .117 2.95l-3.56 3.942c-.467.523-1.1.872-1.792.988l-.976.163a1.844 1.844 0 0 1-2.138-2.017l.11-1.007c.069-.642.337-1.246.767-1.727l.003-.003zm-2.5 5.008 3.605-3.993a.59.59 0 0 1 .831-.029l.898.83a.59.59 0 0 1 .033.835l-3.57 3.954-.003.003c-.24.27-.567.45-.922.509l-.977.163a.344.344 0 0 1-.398-.376l.109-1.007c.035-.33.173-.64.394-.889"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathEditBulk;
