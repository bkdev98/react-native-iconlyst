import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.126 9.343-4.958-4.96c-.94-.94-2.07-1.425-3.253-1.373-1.156.04-2.27.563-3.221 1.514l-.085.085 1.928 1.935a2.213 2.213 0 0 1 2.884 2.882l1.096 1.099a2.2 2.2 0 0 1 .96-.228c1.22 0 2.213.99 2.213 2.21 0 1.224-.992 2.22-2.212 2.22a2.22 2.22 0 0 1-2.213-2.22c0-.325.075-.632.202-.911l-1.057-1.06a2 2 0 0 1-.284.13v2.84a2.21 2.21 0 0 1 1.46 2.07 2.22 2.22 0 0 1-2.211 2.22 2.22 2.22 0 0 1-2.214-2.22c0-.955.613-1.762 1.465-2.07v-2.84a2.215 2.215 0 0 1-1.465-2.08c0-.373.102-.72.267-1.03l-1.88-1.887-3.526 3.526c-1.978 1.985-2.035 4.587-.143 6.475l4.958 4.96c.924.922 2.015 1.382 3.12 1.382 1.163-.001 2.34-.51 3.355-1.522l4.67-4.68c.98-.98 1.52-2.171 1.52-3.36 0-1.133-.476-2.208-1.376-3.107"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.374 16.297a.72.72 0 0 0 .713-.721.713.713 0 0 0-1.427 0c0 .398.32.72.714.72M15.478 13.226a.717.717 0 0 0 .713-.72.713.713 0 0 0-1.426 0c0 .397.32.72.712.72M11.374 7.877a.71.71 0 0 0-.714.71c0 .396.32.72.714.72a.72.72 0 0 0 .713-.72c0-.392-.32-.71-.713-.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitBold;
