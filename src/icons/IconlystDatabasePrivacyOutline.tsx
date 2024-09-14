import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabasePrivacyOutline = ({
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
      d="M16.854 13.152c.103-.022.25-.051.389-.051.138 0 .285.028.388.051.12.027.258.063.402.104.288.082.629.192.96.31.332.116.664.242.935.359.135.057.264.117.373.174.081.043.24.127.36.25l.01.009c.061.06.206.204.288.433.072.2.078.41.079.569q0 .201-.007.544l-.004.224c-.007.347-.014.81-.014 1.435 0 1.602-.969 2.658-1.822 3.273a6.6 6.6 0 0 1-1.679.865l-.034.011-.011.003-.004.002h-.002L17.243 21l-.218.717h-.002l-.004-.002-.011-.003-.035-.011-.116-.04a6.587 6.587 0 0 1-1.563-.825c-.853-.615-1.822-1.671-1.822-3.273 0-.625-.007-1.088-.013-1.436l-.005-.226a21 21 0 0 1-.007-.542c.002-.158.007-.368.079-.568.082-.23.227-.374.289-.435l.009-.009c.121-.12.28-.205.36-.248.11-.057.238-.116.373-.174a17.396 17.396 0 0 1 1.895-.67 7 7 0 0 1 .402-.103M17.243 21l-.218.717a.75.75 0 0 0 .435 0zm0-.798.169-.07c.25-.111.579-.28.903-.514.657-.473 1.198-1.135 1.198-2.055 0-.636.007-1.109.014-1.463l.005-.246c.004-.207.007-.35.006-.46a5 5 0 0 0-.201-.09c-.231-.1-.53-.215-.842-.324-.31-.11-.622-.21-.874-.282a5 5 0 0 0-.378-.094l-.067.013q-.121.027-.311.081c-.253.072-.564.173-.875.282-.311.11-.611.225-.842.324a5 5 0 0 0-.2.09c-.001.11.002.252.006.456l.005.25c.006.354.013.826.013 1.463 0 .92.542 1.582 1.199 2.055a5 5 0 0 0 1.072.584M4.213 5.277a.75.75 0 0 1 .75.75v5.786l.002.015c.006.03.02.09.054.171.066.157.218.418.577.702.728.576 2.364 1.29 5.954 1.29a.75.75 0 1 1 0 1.5c-3.747 0-5.78-.738-6.886-1.614-.558-.443-.865-.908-1.028-1.296a2.3 2.3 0 0 1-.169-.65l-.003-.056v-.022l-.001-.009v-.006s0-.002.75-.002h-.75V6.027a.75.75 0 0 1 .75-.75M18.889 5.277a.75.75 0 0 1 .75.75v4.841a.75.75 0 1 1-1.5 0v-4.84a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.213 11.086a.75.75 0 0 1 .75.75v5.786l.002.015c.006.03.02.09.054.171.066.157.218.418.577.702.728.576 2.364 1.29 5.954 1.29a.75.75 0 0 1 0 1.5c-3.747 0-5.78-.738-6.885-1.614-.56-.442-.866-.908-1.029-1.296a2.3 2.3 0 0 1-.169-.649l-.003-.056v-.022l-.001-.01v-.005c0-.002 0-.002.75-.002h-.75v-5.81a.75.75 0 0 1 .75-.75M5.306 5.348c-.277.264-.343.47-.343.608s.066.343.343.608c.28.266.723.54 1.334.786 1.216.491 2.948.812 4.9.812s3.684-.32 4.9-.812c.611-.246 1.055-.52 1.334-.786.277-.265.343-.47.343-.608s-.066-.344-.343-.608c-.28-.266-.723-.54-1.333-.787-1.217-.49-2.95-.811-4.9-.811-1.953 0-3.685.32-4.901.811-.61.246-1.055.52-1.334.787m.772-2.178c1.436-.579 3.367-.92 5.462-.92s4.027.341 5.462.92c.716.289 1.345.652 1.807 1.093.464.442.808 1.014.808 1.693 0 .678-.344 1.25-.808 1.693-.462.441-1.091.804-1.807 1.092-1.435.58-3.367.92-5.462.92s-4.026-.34-5.462-.92c-.715-.288-1.345-.65-1.807-1.092-.464-.443-.808-1.015-.808-1.693s.344-1.25.808-1.693c.462-.441 1.092-.804 1.807-1.093"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabasePrivacyOutline;