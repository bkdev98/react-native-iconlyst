import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsBold = ({
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
      d="M12.656 15.816a.3.3 0 0 0-.32-.136l-1.74.379c-1.254.29-2.543-.507-2.84-1.786a2.4 2.4 0 0 1 .155-1.532l.728-1.567a.3.3 0 0 0-.073-.35L7.224 9.625a1.23 1.23 0 0 0-.894-.3 1.22 1.22 0 0 0-.846.42c-.175.192-.28.435-.304.704l-.206 2.42a.24.24 0 0 1-.116.178l-2.13 1.222a1.223 1.223 0 0 0 .14 2.195l2.28.928c.052.019.098.077.112.142l.498 2.375c.127.576.626.965 1.212.965q.136 0 .274-.03c.261-.067.486-.204.65-.395l1.61-1.86a.23.23 0 0 1 .197-.08l2.424.239c.32.038.648-.05.906-.254.26-.204.422-.5.458-.831a1.25 1.25 0 0 0-.17-.774z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.048 8.554 18.306 7.38a.37.37 0 0 1-.22-.278l-.592-2.88q0-.002-.002-.005a1.4 1.4 0 0 0-.423-.734 1.4 1.4 0 0 0-1.97.098l-1.957 2.202a.37.37 0 0 1-.335.124l-2.94-.35a1.3 1.3 0 0 0-.89.183c-.315.183-.538.48-.628.834a1.36 1.36 0 0 0 .154 1.048l1.53 2.53a.37.37 0 0 1 .021.35l-1.235 2.66a1.382 1.382 0 0 0 1.564 1.919l2.91-.632a.36.36 0 0 1 .342.093l2.188 1.998a1.39 1.39 0 0 0 1.815.059c.288-.234.467-.566.505-.942l.261-2.922a.35.35 0 0 1 .19-.285l2.597-1.434a1.4 1.4 0 0 0 .595-.671 1.38 1.38 0 0 0-.738-1.792"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsBold;
