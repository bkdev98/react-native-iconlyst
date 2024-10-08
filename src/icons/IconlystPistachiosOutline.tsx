import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPistachiosOutline = ({
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
      d="M4.66 3.624a.75.75 0 0 1 .8-.372c.907.178 1.89.894 2.393 2.478.337 1.064.462 2.523.234 4.515.276-.403.56-.831.846-1.273.609-.94 1.206-1.905 1.75-2.785.33-.532.64-1.033.924-1.48A.75.75 0 0 1 12.87 4.7c1.08 1.673 1.292 3.693.95 5.574a.75.75 0 0 1-1.477-.269c.211-1.156.165-2.315-.186-3.35l-.181.292c-.554.894-1.172 1.892-1.785 2.84-.972 1.5-1.996 2.976-2.833 3.824a.75.75 0 0 1-1.265-.694c.803-3.504.7-5.565.329-6.734-.212-.668-.505-1.036-.772-1.237-1.872 3.585-2.12 6.095-1.761 7.748.373 1.718 1.418 2.599 2.193 2.906.87.267 1.72.178 2.518-.183a.75.75 0 0 1 .618 1.367c-1.105.5-2.344.638-3.61.24l-.044-.016c-1.241-.478-2.655-1.761-3.141-3.996-.483-2.225-.03-5.3 2.236-9.389"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.17 7.885a.75.75 0 0 1 .879.078c.696.608 1.19 1.72.832 3.343-.24 1.09-.86 2.416-2.054 4.026.44-.21.9-.44 1.37-.68.997-.51 1.996-1.045 2.908-1.535.551-.296 1.07-.575 1.54-.821a.75.75 0 0 1 1.097.627c.155 3.147-1.987 5.956-4.522 7.454-2.515 1.487-5.82 1.888-7.928-.412l-.03-.036c-.837-1.034-1.42-2.853-.723-5.03.693-2.17 2.624-4.606 6.63-7.014m-4.757 11.083c1.406 1.513 3.803 1.442 6.044.118 1.837-1.086 3.299-2.878 3.69-4.826l-.303.162c-.926.498-1.96 1.053-2.965 1.566-1.592.814-3.217 1.58-4.366 1.896a.75.75 0 0 1-.749-1.233c2.448-2.633 3.389-4.47 3.652-5.668.15-.684.081-1.149-.05-1.457-3.413 2.169-4.883 4.218-5.399 5.83-.535 1.674-.071 2.96.446 3.612M11.485 4.021c.288.706.44 1.618.453 2.69a.75.75 0 1 1-1.5.02c-.011-.96-.149-1.669-.342-2.143-.198-.485-.41-.628-.515-.663-.082-.027-.279-.048-.634.219-.359.27-.793.78-1.247 1.609a.75.75 0 1 1-1.316-.721c.51-.93 1.07-1.641 1.661-2.087.596-.448 1.305-.679 2.012-.442.684.228 1.144.823 1.428 1.518"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.882 11.642c-.104.754-.428 1.62-.953 2.557a.75.75 0 1 1-1.308-.734c.469-.836.705-1.52.774-2.027.072-.519-.04-.748-.114-.831-.057-.065-.218-.182-.658-.128-.446.055-1.078.28-1.885.77a.75.75 0 1 1-.779-1.282c.907-.551 1.747-.887 2.481-.977.74-.09 1.47.064 1.964.622.479.54.58 1.286.477 2.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPistachiosOutline;
