import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxes2Outline = ({
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
      d="M10.598 5.25c-.414 0-.75.34-.75.75 0 .42.336.75.75.75h1.998c.414 0 .75-.33.75-.75 0-.41-.336-.75-.75-.75zM6.604 14.25c-.416 0-.75.33-.75.75 0 .41.334.75.75.75h1.998c.414 0 .75-.34.75-.75 0-.42-.336-.75-.75-.75zM15.108 14.429a.753.753 0 0 0 .488 1.321h2c.414 0 .75-.34.75-.75 0-.42-.336-.75-.75-.75h-2a.75.75 0 0 0-.488.179"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.346 9.48c-.002.643.143 1.249.436 1.766l-1.275-.006c-.923 0-1.727.33-2.3.94-.565.61-.846 1.43-.849 2.32l-.008 3.97c-.001.449.069.88.212 1.276q.134.373.353.697.123.183.274.347c.57.62 1.373.95 2.292.95l4.216.01c.922 0 1.727-.33 2.299-.94q.053-.057.104-.117.042.05.086.097c.568.62 1.372.95 2.291.95l4.215.01c.922 0 1.727-.33 2.299-.94.566-.6.846-1.42.85-2.31l.009-3.98c.002-.89-.275-1.71-.84-2.32-.568-.61-1.371-.94-2.293-.94l-2.31-.011c.288-.513.432-1.113.434-1.749l.009-3.97c.002-.89-.275-1.71-.838-2.32-.57-.62-1.372-.95-2.295-.95l-4.215-.01c-.921 0-1.727.33-2.298.94-.566.6-.848 1.42-.849 2.31zm7.35 1.78-4.215-.01c-.548-.01-.939-.2-1.195-.47-.264-.29-.441-.72-.44-1.3l.01-3.97c0-.58.18-1.02.444-1.3a1.4 1.4 0 0 1 .313-.246c.23-.132.524-.214.886-.214l4.214.01c.552 0 .943.19 1.199.47.26.28.44.71.438 1.3l-.01 3.97c0 .58-.181 1.01-.444 1.29-.257.28-.648.47-1.2.47M10.9 19.79c.264-.28.445-.72.446-1.3v-.02l.008-3.95c.002-.58-.176-1.02-.437-1.3-.256-.27-.646-.46-1.2-.46l-4.214-.02c-.55 0-.941.19-1.2.47q-.146.157-.254.376a2 2 0 0 0-.09.23c-.063.198-.1.426-.1.684l-.008 3.97c-.002.58.177 1.02.44 1.3.256.28.647.47 1.196.47l4.215.01c.55 0 .942-.19 1.198-.46m7.798.46-4.215-.01c-.55 0-.94-.19-1.197-.47-.26-.277-.438-.711-.44-1.282v-.018l.008-3.95.002-.02c0-.58.18-1.01.444-1.29.257-.28.648-.47 1.2-.47l4.213.02c.553 0 .944.19 1.199.46.262.28.44.72.439 1.3l-.01 3.97c-.002.58-.181 1.02-.445 1.3-.256.27-.647.46-1.198.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxes2Outline;