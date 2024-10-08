import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYoutubeOutline = ({
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
      d="M19.03 4.406a3.33 3.33 0 0 1 2.27 2.39c.168.517.274 1.317.343 2.187.072.91.107 1.972.107 3.026s-.036 2.111-.108 3.013c-.068.855-.174 1.644-.343 2.148a3.33 3.33 0 0 1-2.259 2.383c-.285.101-.687.17-1.114.224-.462.057-1.023.104-1.646.14a75 75 0 0 1-4.28.107 77 77 0 0 1-4.281-.112 27 27 0 0 1-1.644-.14c-.427-.052-.826-.12-1.109-.217a3.33 3.33 0 0 1-2.262-2.302c-.17-.512-.278-1.315-.347-2.189a40 40 0 0 1-.107-3.031c0-1.058.036-2.12.108-3.03.068-.864.175-1.66.342-2.17a3.33 3.33 0 0 1 2.263-2.387c.283-.098.684-.166 1.112-.218a27 27 0 0 1 1.644-.139A78 78 0 0 1 12 3.977c1.514-.003 3.033.03 4.277.097a29 29 0 0 1 1.642.128c.432.049.832.112 1.112.204M6.257 5.716c-.438.054-.698.11-.806.149l-.047.015A1.83 1.83 0 0 0 4.15 7.218l-.02.066c-.106.312-.207.953-.277 1.838-.068.86-.103 1.883-.103 2.911s.034 2.051.103 2.913c.07.886.17 1.53.278 1.846l.013.041a1.83 1.83 0 0 0 1.306 1.302c.11.04.37.095.807.148.419.052.946.096 1.55.132 1.21.071 2.699.108 4.193.11a74 74 0 0 0 4.192-.105c.605-.036 1.131-.08 1.549-.132.438-.054.696-.11.802-.15l.053-.018a1.83 1.83 0 0 0 1.255-1.339l.02-.07c.105-.3.206-.93.276-1.809.068-.853.103-1.869.103-2.893a38 38 0 0 0-.102-2.908c-.07-.886-.171-1.535-.28-1.86l-.017-.06a1.83 1.83 0 0 0-1.286-1.349c-.113-.038-.377-.09-.816-.14-.42-.047-.948-.088-1.553-.12-1.21-.066-2.7-.098-4.195-.095a77 77 0 0 0-4.194.11c-.605.035-1.132.079-1.55.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.395 9.933a1.22 1.22 0 0 1 1.823-1.062l3.673 2.089a1.22 1.22 0 0 1-.002 2.121l-3.671 2.088a1.22 1.22 0 0 1-1.823-1.06zm1.5.48 2.826 1.607-2.826 1.608z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYoutubeOutline;
