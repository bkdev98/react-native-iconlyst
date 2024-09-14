import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleGenerateByAiOutline = ({
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
      d="M16.917 14.428a.75.75 0 0 1 1.06 0l-.53.53-.53.53a.75.75 0 0 1 0-1.06m.53 5.572-.53-.53.891-.892 1.1-1.098-1.991-1.991.53-.53.53-.53 2.522 2.52a.75.75 0 0 1 0 1.061l-1.63 1.63-.891.89zm0 0-.53-.53a.75.75 0 1 0 1.06 1.06zM16.917 3.47a.75.75 0 0 1 1.06 0l-.53.53-.53.53a.75.75 0 0 1 0-1.06m.53 5.571-.53-.53.891-.891 1.1-1.099-1.991-1.99.53-.531.53-.53L20.5 5.99a.75.75 0 0 1 0 1.062l-1.63 1.629-.891.89zm0 0-.53-.53a.75.75 0 1 0 1.06 1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.402 15.393a.75.75 0 0 1 1.058-.071c1.584 1.384 3.491 1.409 5.51 1.409a.75.75 0 0 1 0 1.5h-.078c-1.936 0-4.382 0-6.419-1.78a.75.75 0 0 1-.071-1.058M19.908 5.77h.06a.75.75 0 0 1 0 1.5c-1.52 0-2.972.01-4.294.616-1.273.584-2.524 1.773-3.468 4.368-1.027 2.823-2.235 4.387-3.706 5.196-1.415.779-2.954.778-4.388.778h-.083a.75.75 0 0 1 0-1.5c1.532 0 2.7-.016 3.748-.592 1.02-.561 2.053-1.737 3.019-4.394 1.05-2.884 2.538-4.433 4.253-5.22 1.643-.753 3.402-.753 4.859-.752M6.897 10.49a.75.75 0 0 1-.704-.49l-.111-.303a3.4 3.4 0 0 0-2.01-2.013l-.301-.111a.75.75 0 0 1 0-1.407l.3-.111a3.4 3.4 0 0 0 2.01-2.013l.112-.302a.75.75 0 0 1 1.407 0l.112.302a3.4 3.4 0 0 0 2.01 2.013l.3.111a.75.75 0 0 1 0 1.407l-.3.111a3.4 3.4 0 0 0-2.01 2.013L7.6 10a.75.75 0 0 1-.703.49m1.18-3.62a4.9 4.9 0 0 1-1.18-1.182 4.9 4.9 0 0 1-1.18 1.182c.457.323.856.723 1.18 1.18a4.9 4.9 0 0 1 1.18-1.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShuffleGenerateByAiOutline;
